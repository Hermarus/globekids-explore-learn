import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save, Loader2, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ContentItem {
  key: string;
  value: string;
  type: string;
}

const sectionLabels: Record<string, string> = {
  header: "Шапка",
  hero: "Главный экран",
  destinations: "Направления",
  benefits: "Преимущества",
  process: "Процесс",
  trust: "Безопасность",
  form: "Форма заявки",
  footer: "Подвал",
};

const AdminContentEditor = () => {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const fetchContent = async () => {
    setLoading(true);
    const { data, error } = await supabase.functions.invoke("get-content");
    if (error) {
      toast({ title: "Ошибка загрузки", variant: "destructive" });
      setLoading(false);
      return;
    }
    const list: ContentItem[] = Object.entries(data as Record<string, { value: string; type: string }>)
      .map(([key, item]) => ({ key, value: item.value, type: item.type }))
      .sort((a, b) => a.key.localeCompare(b.key));
    setItems(list);
    setLoading(false);
  };

  useEffect(() => { fetchContent(); }, []);

  const handleChange = (key: string, value: string) => {
    setItems(prev => prev.map(item => item.key === key ? { ...item, value } : item));
    setSaved(prev => ({ ...prev, [key]: false }));
  };

  const handleSave = async (key: string) => {
    const item = items.find(i => i.key === key);
    if (!item) return;

    setSaving(prev => ({ ...prev, [key]: true }));
    const { error } = await supabase.functions.invoke("update-content", {
      body: { key, value: item.value },
    });

    if (error) {
      toast({ title: "Ошибка сохранения", description: key, variant: "destructive" });
    } else {
      setSaved(prev => ({ ...prev, [key]: true }));
    }
    setSaving(prev => ({ ...prev, [key]: false }));
  };

  // Group by section
  const grouped = items.reduce<Record<string, ContentItem[]>>((acc, item) => {
    const section = item.key.split(".")[0];
    if (!acc[section]) acc[section] = [];
    acc[section].push(item);
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([section, sectionItems]) => (
        <div key={section}>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            {sectionLabels[section] || section}
          </h3>
          <div className="grid gap-3">
            {sectionItems.map((item) => (
              <Card key={item.key} className="border-0 shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <label className="text-xs font-mono text-muted-foreground mb-1 block">
                        {item.key}
                      </label>
                      {item.value.length > 80 ? (
                        <Textarea
                          value={item.value}
                          onChange={(e) => handleChange(item.key, e.target.value)}
                          className="text-sm"
                          rows={3}
                        />
                      ) : (
                        <Input
                          value={item.value}
                          onChange={(e) => handleChange(item.key, e.target.value)}
                          className="text-sm"
                        />
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant={saved[item.key] ? "outline" : "default"}
                      onClick={() => handleSave(item.key)}
                      disabled={saving[item.key]}
                      className="mt-5"
                    >
                      {saving[item.key] ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : saved[item.key] ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Save className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminContentEditor;
