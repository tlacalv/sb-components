import './mylabel.css'

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
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor

}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{color:fontColor}}>
      {allCaps? label.toUpperCase() : label}
    </span>
  )
}
