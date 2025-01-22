import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const MainLogo = React.memo(({ isVisibleLogo = true }) => {
  return (
    <Link
      className={classNames('main-logo', { 'main-logo--visible': isVisibleLogo })}
    />
  );
});
