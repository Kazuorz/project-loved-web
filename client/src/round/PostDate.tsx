import { IRound } from '../interfaces';
import { dateFromString } from '../date-format';

type PostDateProps = {
  round: IRound;
};

export default function PostDate({ round }: PostDateProps) {
  const date = dateFromString(round.news_posted_at);
  // TODO: should have real logic
  const posted = date != null && new Date() >= date;

  return (
    <span>
      {date == null
        ? 'No post date set'
        : `${posted ? 'Posted' : 'Posting'} on ${date.toLocaleString()}`
      }
    </span>
  );
}
