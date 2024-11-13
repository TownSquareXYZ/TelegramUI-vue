<template>
  <div
    v-bind="$attrs"
    ref="rootRef"
    :class="[
      styles.wrapper,
      state.platform === 'ios' && styles['wrapper--ios'],
      state.appearance === 'dark' && styles['wrapper--dark']
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useAppearance } from './hooks/useAppearance'
  import { usePlatform } from './hooks/usePlatform'
  import { provideAppRoot, AppRootState } from './AppRootContext'
  import styles from './AppRoot.module.css';
  
  export interface AppRootProps {
    platform: AppRootState['platform'];
    appearance: AppRootState['appearance'];
  }
  
  const props = withDefaults(defineProps<AppRootProps>(),{
    platform: "base",
    appearance: "light"
  });
  
  const rootRef = ref<HTMLDivElement | null>(null);
  const { setState, state } = provideAppRoot();
  
  const appearance = useAppearance(props.appearance);
  const platform = usePlatform(props.platform);
  
  
  setState({
    platform: platform,
    appearance: appearance,
    portalContainer: rootRef,
    isRendered: true
  });
</script>