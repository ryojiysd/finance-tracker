export const useRedirectIfAuthenticated = (url = "/") => {
  const user = useSupabaseUser();

  watch(
    user,
    (user) => {
      return navigateTo(url);
    },
    { immediate: true }
  );

  return { user };
};
