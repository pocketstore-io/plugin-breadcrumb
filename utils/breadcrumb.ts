import { v4 as uuidv4 } from "uuid";

export const breadcrumbs: Ref = ref([]);

type Breadcrumb = {
    id: string;
    code: string;
    icon: string | null; // You may use a specific icon type if you use a UI library
    link: string;
};

export const addBreadcrumb = (item: Breadcrumb) => {
    item.id = uuidv4();
    breadcrumbs.value.push(item);
};

export const clearBreadcrumbs = () => {
    breadcrumbs.value = [];
}
