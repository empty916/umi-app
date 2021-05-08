import { inject, Store } from 'umi';
import styles from './index.less';

const injector = inject('count');

function IndexPage({ count }: typeof injector.type) {
  console.log(count.state, count.maps);

  return (
    <div>
      <h1 className={styles.title}>Page index: {count.state}</h1>
      <button onClick={() => count.actions.update(count.state + 1)}>+</button>
      <br />
      <button onClick={() => count.actions.update(count.state - 1)}>-</button>
      <br />
    </div>
  );
}

IndexPage.getInitialProps = ({ store }: { store: Store }) => {
  store.dispatch('count', 'update', 2);
  return store.getAllStates();
};

export default injector(IndexPage);
