import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";

/**
 *
 * @param data: array of objects and each object have tags array.
 * @returns
 */

const useTags = (data: any): [any, (text: string) => void] => {
  const [currentTag, setCurrentTag] = useState("");

  const { query } = useRouter();

  useEffect(() => {
    if (query.tag !== undefined) {
      setCurrentTag(query.tag as string);
    }
  }, [query.tag]);

  const memoizedData = useMemo(() => {
    if (currentTag) {
      return data.filter((item: any) => item.tags.includes(currentTag));
    }

    return data;
  }, [currentTag, data]);

  return [memoizedData, (text) => setCurrentTag(text)];
};

export default useTags;