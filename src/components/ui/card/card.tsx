import Link from 'next/link';
import { CardProps } from './types';
import React from 'react';

export const Card = ({ className, contentClassName , iconClassName, title, icon, link, linkLabel }: CardProps) => {
  return (
    <div className={className} data-testid="card">
      <div className={contentClassName}>
        <p>{title}</p>
         {link && <Link href={link}>{linkLabel}</Link>}
      </div>

      <div className={iconClassName}>{icon}</div>
    </div>
  );
};
