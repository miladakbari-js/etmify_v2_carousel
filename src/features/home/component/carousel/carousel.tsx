import Link from 'next/link';
import { CarouselProps } from './types';

export const Carousel = ({
  className,
  classHead,
  classTitle,
  classActions,
  classCards,
  title,
  link,
  linkLabel,
  actions,
  cards,
}: CarouselProps) => {
  return (
    <section className={className} data-testid="carousel">
      <div className={classHead}>
        <h3 className={classTitle}>{title}</h3>
        {link && linkLabel && <Link href={link}>{linkLabel}</Link>}
      </div>
      <div className={classActions}>{actions}</div>
      <div className={classCards}>{cards}</div>
    </section>
  );
};
