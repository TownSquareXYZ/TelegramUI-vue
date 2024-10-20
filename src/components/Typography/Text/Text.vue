<template>
  <Typography
    v-bind="$props"
    :class="[
      styles.wrapper,
    ]"
  >
    <slot></slot>
  </Typography>
</template>

<script lang="ts" setup>
  import styles from './Text.module.css';
  import { Typography, TypographyProps } from '../Typography';

  export type TextProps = Omit<TypographyProps, 'plain'>

  withDefaults(defineProps<TextProps>(), {
    component: 'span',
  });
</script>