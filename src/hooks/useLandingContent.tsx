import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface ContentItem {
  value: string;
  type: string;
}

type ContentMap = Record<string, ContentItem>;

const fetchContent = async (): Promise<ContentMap> => {
  const { data, error } = await supabase.functions.invoke("get-content");
  if (error) throw error;
  return data as ContentMap;
};

export const useLandingContent = () => {
  const { data: content, isLoading } = useQuery({
    queryKey: ["landing-content"],
    queryFn: fetchContent,
    staleTime: 5 * 60 * 1000,
  });

  const getContent = (key: string, fallback: string): string => {
    return content?.[key]?.value ?? fallback;
  };

  return { content, isLoading, getContent };
};
