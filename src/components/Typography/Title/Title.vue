<template>
  <Typography v-bind="$props" :class="[
    styles.wrapper,
    {
      [titleLevelStyles[level]]: level,
    },
  ]" :component="componentTag">
    <slot></slot>
  </Typography>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import styles from './Title.module.css';
  import { Typography } from '../Typography';
  import type { TitleProps, TitleLevel } from './Title';
  
  
  const props = withDefaults(defineProps<TitleProps>(), {
    level: '2',
  });
  
  const titleLevelTags: Record<TitleLevel, string> = {
    '1': 'h2',
    '2': 'h3',
    '3': 'h4',
  };
  
  const titleLevelStyles: Record<TitleLevel, string> = {
    '1': styles['wrapper--1'],
    '2': styles['wrapper--2'],
    '3': styles['wrapper--3'],
  };
  
  const componentTag = computed(() => props.component || titleLevelTags[props.level]);
</script>