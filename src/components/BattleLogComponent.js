import React from 'react';

export default function BattleLogComponent(props) {
    return (
        <div>
            {props.stage === "over"
            ?
                <div>
                <h1>GAME OVER</h1>
                <h4 className={'logTitle'}>
                    The winner is Player {props.winner}
                </h4>
                </div>
                :
            <h4 className={'logTitle'}> Player {props.activePlayerId}'s Turn To Strike</h4>
            }
            <div className={'battleLogContainer'}>
                {props.battleLog.map(logItem => {
                    return (
                        <div className={'battleLogRow'}>
                            <div style={{width: '100px'}}>{logItem.time}</div>
                            <div style={{width: '300px'}}>{logItem.sentence}</div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}