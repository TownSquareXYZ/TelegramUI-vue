import { TypographyProps } from "../Typography";

export type TitleLevel = '1' | '2' | '3';

export interface TitleProps extends TypographyProps {
    /** 
     * Determines the size and semantic tag of the title, with options for `h2`, `h3`, or `h4`. 
    */
    level?: TitleLevel;
}