import { useCallback } from 'react';

import { ContentType } from '../models/Content';
import useLocalStorage from './useLocalStorage';

export type HistoryEntry = {
  type: ContentType;
  slug: string;
};

function useReadHistory() {
  const stringifyEntries = (entries: HistoryEntry[]) =>
    entries.map(({ type, slug }) => `${type}:${slug}`).join(",");

  const parseEntries = (entriesStr: string) =>
    entriesStr
      .split(",")
      .map((entryStr) => {
        const [type, slug] = entryStr.split(":");
        return { type, slug };
      })
      .filter((entry): entry is HistoryEntry => {
        if (entry.slug) {
          switch (entry.type) {
            case ContentType.BlogPost:
            case ContentType.BookExtract:
              return true;
          }
        }

        return false;
      });

  const [entriesStr, setHistoryRaw] = useLocalStorage("history", "");
  let entries = parseEntries(entriesStr);
  let lastEntry = entries[entries.length - 1];

  const addEntry = useCallback(
    (newEntry: HistoryEntry) => {
      // ignore page refreshes
      if (lastEntry && lastEntry.slug == newEntry.slug) {
        return;
      }

      const newEntries = [...entries, newEntry];
      setHistoryRaw(stringifyEntries(newEntries));
    },
    [setHistoryRaw]
  );

  return { entries, lastEntry, addEntry };
}

export default useReadHistory;
