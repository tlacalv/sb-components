/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * It's the text to show in the label.
     */
    label: string;
    /**
     * The size of the font of the label.
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * The color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Boolean to show lable in all caps
     */
    allCaps?: boolean;
    /**
     * Custom font color
     */
    fontColor?: string;
    /**
     * Background color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
