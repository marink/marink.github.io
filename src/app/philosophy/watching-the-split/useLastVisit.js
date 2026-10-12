"use client";

// Remembers, in this browser only, when the reader last visited the section.
// The previous visit is frozen for the whole browsing session, so the "updated"
// markers stay visible while the reader moves between pages. Nothing is sent
// anywhere; if storage is unavailable, no markers are shown.

import { useEffect, useState } from 'react';

const LAST = 'wts:lastVisit';
const PREV = 'wts:previousVisit';

export function useLastVisit() {
  const [previous, setPrevious] = useState(null);
  useEffect(() => {
    try {
      let prev = sessionStorage.getItem(PREV);
      if (prev === null) {
        prev = localStorage.getItem(LAST) || '';
        sessionStorage.setItem(PREV, prev);
        localStorage.setItem(LAST, new Date().toISOString());
      }
      setPrevious(prev ? new Date(prev) : null);
    } catch {
      setPrevious(null);
    }
  }, []);
  return previous;
}
