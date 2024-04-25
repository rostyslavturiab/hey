import type { FC } from 'react';

import { APP_NAME, STATIC_IMAGES_URL } from '@hey/data/constants';
import humanize from '@hey/lib/humanize';
import { useGlobalModalStateStore } from 'src/store/non-persisted/useGlobalModalStateStore';

const Score: FC = () => {
  const { score, scoreExpiresAt } = useGlobalModalStateStore();

  return (
    <div className="flex flex-col items-center space-y-5 p-5">
      <img
        alt="Score"
        className="size-14"
        src={`${STATIC_IMAGES_URL}/app-icon/2.png`}
      />
      <div className="space-y-2">
        <div className="font-bold">Your Score</div>
        <div className="w-fit rounded-full bg-gradient-to-r from-green-500 to-cyan-500 px-4 py-0.5 !text-lg font-bold text-white">
          {score ? humanize(score) : '...'}
        </div>
      </div>
      <div className="text-center leading-7">
        <b>{APP_NAME} score</b> is determined by a super-secret algorithm that
        combines the number of crucial interactions you've received, the
        publications you've posted, and lot other factors 🤓
      </div>
    </div>
  );
};

export default Score;