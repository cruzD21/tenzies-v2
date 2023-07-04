import React, { FC } from 'react';
import { DieWrapper } from './Die.styled';

interface DieProps {}

const Die: FC<DieProps> = () => (
 <DieWrapper data-testid="Die">
    Die Component
 </DieWrapper>
);

export default Die;
