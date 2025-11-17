import { useState, useEffect } from 'react';
import type { HomeData } from '../types';

export function useHomeData() {
  const [data, setData] = useState<HomeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch home data
    setIsLoading(false);
  }, []);

  return { data, isLoading };
}

