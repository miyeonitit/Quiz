import React from "react";

import styles from "./FetchingDataLoading.module.css";

type FetchingDataLoadingProps = {
  "data-cy": string;
};

const FetchingDataLoading: React.FC<FetchingDataLoadingProps> = ({
  "data-cy": dataCypress,
}) => {
  return (
    <div className={styles.data_fetching_box} data-cy={dataCypress}>
      <div className={styles.loading_spinner_box}>
        <div className={styles.loading_spinner} />
      </div>

      <h2>문제를 불러오고 있어요.</h2>
    </div>
  );
};

export default FetchingDataLoading;
