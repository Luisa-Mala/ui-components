import { Icon } from "./Icon";

export default {
    title: 'Atoms/Icon',
    component: Icon,
    argTypes: {
        nameIcon:{
            control: 'person'
        }
    }
}

const template = (args) => <Icon {...args} />;

export const IconDefault =  template.bind({})
IconDefault.storyName = 'Icon';