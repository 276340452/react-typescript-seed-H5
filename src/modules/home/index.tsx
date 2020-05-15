
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button, Toast } from 'antd-mobile';
import { connect } from 'react-redux';

import { IRootState } from 'shared/reducers';
import {} from './home.reducer';
import './home.scss';
import { translate } from 'shared/util/translator';

export interface IHomeProp extends StateProps, DispatchProps, RouteComponentProps {}

export const Home = (props: IHomeProp) => {
  const { loading } = props;

  const handleChangeColor = (e) => {
    window?.less?.modifyVars({
      '@brand-primary': e.target.value,
    }).then(() => {
      Toast.success('主题切换成功');
    }).catch((error) => {
      Toast.fail('主题切换失败');
    });
  };
  return (
    <div>
      {loading}
      {translate('global.main')}
      <input type="color" onChange={handleChangeColor} />
      <Button type="primary">Primary</Button>
    </div>
  );
};

const mapStateToProps = ({ home }: IRootState) => ({
  loading: home.loading,
});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
