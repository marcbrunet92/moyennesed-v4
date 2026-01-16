import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsPage from './SettingsPage';
import ProfilePage from './pages/profile/ProfilePage';
import CoefficientsPage from './pages/CoefficientsPage';
import AdvancedSettingsPage from './pages/AdvancedSettingsPage';

// Create stack for navigation
const Stack = createNativeStackNavigator();

// Settings page stack
function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsPage"
        component={SettingsPage}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />

      {/* Profile page */}
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />

      {/* Coefficients page */}
      <Stack.Screen
        name="CoefficientsPage"
        component={CoefficientsPage}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />

      {/* Advanced settings page */}
      <Stack.Screen
        name="AdvancedSettingsPage"
        component={AdvancedSettingsPage}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />

    </Stack.Navigator>
  );
}

export default SettingsStack;