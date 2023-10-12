/**
 * title: Description
 * desc: Set page title.
 */

import React from 'react';
import { useTitle } from 'phoenixpan-hooks';

export default () => {
  useTitle('Test Page Title');

  return (
    <div>
      <p>Set title of the page.</p>
    </div>
  );
};
