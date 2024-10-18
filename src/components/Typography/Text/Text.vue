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
  import { Typography } from '../Typography';
  import type { TextProps } from './Text';

  withDefaults(defineProps<TextProps>(), {
    component: 'span',
  });
</script>