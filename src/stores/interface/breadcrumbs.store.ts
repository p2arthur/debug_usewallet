export const useBreadcrumbsStore = defineStore('breadcrumbs', () => {
  interface BreadcrumbInterface {
    name: string;
    url: string;
  }

  const breadcrumbs = reactive<BreadcrumbInterface[]>([]);

  const addBreadcrumb = (breadcrumb: BreadcrumbInterface) => {
    const breadcrumbToSubstitute = breadcrumbs.filter((breadcrumb) =>
      breadcrumb.name.includes('item')
    );

    if (breadcrumbToSubstitute) {
      breadcrumbs[breadcrumbToSubstitute.index] = breadcrumb;
    } else {
      breadcrumbs.push(breadcrumb);
      console.log(breadcrumbs);
    }
  };

  return { breadcrumbs, addBreadcrumb };
});
