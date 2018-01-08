import { NavigationActions } from "react-navigation";

export const PerformResetNavigation = (navigation, screen_name) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: screen_name })]
  });
  navigation.dispatch(resetAction);
};

export const PerformStackNavigation = (
  navigation,
  screen_name,
  extraParams = {}
) => {
  console.log("navigate here");
  console.log(navigation);
  console.log(extraParams);
  console.log(screen_name);
  const navigateAction = NavigationActions.navigate({
    params: extraParams,
    action: NavigationActions.navigate({ routeName: screen_name })
  });
  navigation.dispatch(navigateAction);
};
