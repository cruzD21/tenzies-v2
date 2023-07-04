import React, { FC } from 'react';
import { MyComponent3Wrapper } from './MyComponent3.styled';

interface MyComponent3Props {}

const MyComponent3: FC<MyComponent3Props> = () => (
 <MyComponent3Wrapper data-testid="MyComponent3">
    MyComponent3 Component
 </MyComponent3Wrapper>
);

export default MyComponent3;
