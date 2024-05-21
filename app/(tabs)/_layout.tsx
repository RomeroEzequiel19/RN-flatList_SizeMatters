import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="listaTareas"
        options={{
          title: 'Lista Tareas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="list-status" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="contador"
        options={{
          title: 'contador',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="contain" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="listaAnimales"
        options={{
          title: 'Lista de Animales',
          
        }}
      />
    </Tabs>
  );
}
