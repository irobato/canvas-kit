import * as React from 'react';
import styled from 'react-emotion';
import {colors, spacing, type} from '@workday/canvas-kit-react-core';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react-icon';
import {makeMq} from '@workday/canvas-kit-react-common';

export interface PageHeaderProps {
  title: string;
  marketing: boolean;
  breakpoints: {
    sm: number;
    md: number;
    lg: number;
  };
}

const Header = styled('header')({
  height: 84,
  backgroundImage: colors.gradients.blueberry,
  color: colors.frenchVanilla100,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

const Container = styled('div')<PageHeaderProps>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    overflow: 'hidden',
    padding: `0 ${spacing.s}`,
  },
  ({marketing, breakpoints}) => {
    const mq = makeMq(breakpoints);

    if (marketing) {
      return {
        boxSizing: 'border-box',
        margin: '0 auto',
        width: '100%',
        maxWidth: 1440,

        [mq.sm]: {
          padding: `0 ${spacing.xl}`,
        },
        [mq.md]: {
          padding: `0 ${spacing.xxl}`,
        },
        [mq.lg]: {
          padding: `0 100px`,
        },
      };
    } else {
      return {
        [mq.sm]: {
          padding: `0 ${spacing.xl}`,
        },
      };
    }
  }
);

const Title = styled('h2')({
  ...type.h1,
  color: colors.frenchVanilla100,
  padding: `${spacing.xs} 0`,
  margin: 0,
  'white-space': 'nowrap',
});

const IconList = styled('div')({
  display: 'flex',
  marginLeft: spacing.l,

  '> *:not(:last-child)': {
    marginRight: spacing.xxs,
  },
});

export default class PageHeader extends React.Component<PageHeaderProps> {
  static defaultProps = {
    title: '',
    marketing: false,
    breakpoints: {
      sm: 768,
      md: 992,
      lg: 1200,
    },
  };

  private renderChildren(children: React.ReactNode): React.ReactNode {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      // child is now guaranteed to be a valid ReactElement from the check above

      type Props = {children: React.ReactNode};
      const propsChildren = (child as React.ReactElement<Props>).props.children;

      if (React.Children.count(propsChildren)) {
        return React.cloneElement(child as React.ReactElement<Props>, {
          children: this.renderChildren(propsChildren),
        });
      }

      // TODO: Should be replaced with icon buttons when ready
      if (child.type === SystemIcon) {
        return React.cloneElement(child as React.ReactElement<SystemIconProps>, {
          color: colors.frenchVanilla100,
          colorHover: colors.blueberry200,
        });
      }

      return child;
    });
  }

  public render() {
    const {title, children} = this.props;

    return (
      <Header>
        <Container {...this.props}>
          <Title>{title}</Title>
          <IconList>{this.renderChildren(children)}</IconList>
        </Container>
      </Header>
    );
  }
}
