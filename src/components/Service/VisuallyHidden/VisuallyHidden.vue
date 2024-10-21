<template>
    <component
      v-bind="$props"
      :is="component"
      :class="[
        styles.wrapper,
      ]"
    >
      <slot></slot>
    </component>
  </template>
  
<script lang="ts" setup>
  import styles from './VisuallyHidden.module.css';

  export interface VisuallyHiddenProps {  
    component?: string;
  }
  
  withDefaults(defineProps<VisuallyHiddenProps>(), { component: 'span' });
</script>