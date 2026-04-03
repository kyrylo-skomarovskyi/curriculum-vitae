import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { useQuery, type QueryFunctionContext } from '@tanstack/react-query';
import { z } from 'zod';
import { db } from '@/lib/firebase';

const profileSchema = z.object({
  fullName: z.string(),
  title: z.string(),
  summary: z.string(),
});
type ProfileKey = ['profile'];

function profileQueryKey(): ProfileKey {
  return ['profile'];
}

async function profileQueryFn({ queryKey: [path] }: QueryFunctionContext<ProfileKey>) {
  const summaryQuery = query(collection(db, path), where('role', '==', 'owner'), limit(1));
  const snapshot = await getDocs(summaryQuery);

  if (snapshot.empty) return null;

  return profileSchema.safeParse(snapshot.docs[0].data()).data;
}

export function useProfileQuery() {
  return useQuery({
    queryKey: profileQueryKey(),
    queryFn: profileQueryFn,
    staleTime: Infinity,
  });
}
