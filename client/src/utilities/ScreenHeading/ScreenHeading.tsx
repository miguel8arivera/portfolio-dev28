import React from 'react';
import './ScreenHeading.css';

interface ScreenHeadingProps {
  title: string;
  subHeading?: string;
}

export default function ScreenHeading({ title, subHeading }: ScreenHeadingProps): JSX.Element {
  return (
    <div className='heading-container'>
      <div className='screen-heading'>
        <span>{title}</span>
      </div>

      {subHeading ? (
        <div className='screen-sub-heading'>
          <span>{subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}

      <div className='heading-seperator'>
        <div className='seperator-line'>
          <div></div>
        </div>
      </div>
    </div>
  );
}
