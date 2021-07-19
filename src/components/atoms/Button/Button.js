import { ButtonStyle } from './styled';

export const Button = ({ label, styled, icon, ...args }) => {
  return (
    <ButtonStyle
        className="c-btn"
        styled={styled}
        {...args}
    >
        {/* {icon && } */}
        <i className="icon">
            download
        </i>
        {label}

    </ButtonStyle>)
};

Button.propTypes = {

}

Button.defaultProps = {
    label: 'Button'
}