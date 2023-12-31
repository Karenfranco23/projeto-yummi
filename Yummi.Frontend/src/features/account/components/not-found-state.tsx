import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const NotFoundState = (): JSX.Element => {
  const { t } = useTranslation('userDetails');

  return (
    <Result
      className="w-full"
      status="404"
      title={t('not-found.title')}
      subTitle={t('not-found.message')}
      extra={
        <Link to="/users">
          <Button type="primary">{t('not-found.action')}</Button>
        </Link>
      }
    />
  );
};
