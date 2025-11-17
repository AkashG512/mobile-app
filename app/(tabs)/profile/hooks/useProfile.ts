import { useState, useEffect } from 'react';
import type { ProfileData } from '../types';

export function useProfile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch profile data
    setIsLoading(false);
  }, []);

  return { profile, isLoading };
}

