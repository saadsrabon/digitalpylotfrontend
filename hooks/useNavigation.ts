import { navigation } from "@/config/navigation";
import { usePermission } from "./userPermission";


export const useNavigation = () => {
  const { hasPermission } = usePermission();

  const allowedNav = navigation.filter((item) =>
    hasPermission(item.permission)
  );

  return allowedNav;
};