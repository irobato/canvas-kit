import * as React from 'react';
import styled from 'react-emotion';
import {TEXT_BORDER_RADIUS} from './utils';
import canvas from '@workday/canvas-kit-react-core';

const TextContainer = styled('div')({
  marginBottom: canvas.spacing.m,
});

export interface SkeletonTextProps {
  lineCount: number;
}

const Line = styled('div')<{
  width: number | string;
  height: number | string;
  borderRadius: number;
  backgroundColor: string;
}>(({width, height, borderRadius, backgroundColor}) => {
  return {
    width: width,
    height: height,
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
    marginBottom: canvas.spacing.xs,
  };
});

export default class SkeletonText extends React.Component<SkeletonTextProps> {
  static defaultProps = {
    lineCount: 2,
  };

  render(): React.ReactNode {
    const {lineCount} = this.props;
    return lineCount > 0 ? <TextContainer>{this.createTextLines()}</TextContainer> : null;
  }

  private readonly createTextLines = () => {
    const {lineCount} = this.props;
    const lines = [];

    const lineProps = {
      backgroundColor: canvas.colors.soap200,
      borderRadius: TEXT_BORDER_RADIUS,
      height: '21px',
      width: '100%',
    };

    for (let i = 0; i < lineCount; i++) {
      lines.push(
        <Line
          key={i}
          {...lineProps}
          width={lineCount === 1 || i + 1 !== lineCount ? '100%' : '60%'}
        />
      );
    }
    return lines;
  };
}
