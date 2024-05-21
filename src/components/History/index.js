import React from 'react'
import styles from './styles.module.css';
import EmptyContainer from '../EmptyContainer';

function History({ dataList: DATA_HISTORY, removeItem }) {
  return (
    <div className={styles.container}>
      {DATA_HISTORY.length > 0 ? <div className={styles.rowContainer}>
        {
          DATA_HISTORY.map(item => {

              return item.show?(<div className={styles.row}>
                <div>{item.time}</div>
                <div className={styles.mainText}> 
                  <div>
                    <img height="14px" src={item.icon_url} alt="icon"></img>
                  </div>
                  <div>{item.displayName}</div>
                  <div className={styles.link}>{item.url}</div>
                </div>
                <div className={styles.deleteIcon} onClick={()=>removeItem(item.id)}>
                  <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete-icon"></img>
                </div>
            </div>):null  
            })
          }
      </div>: <EmptyContainer />}
    </div>
  )
}

export default History

