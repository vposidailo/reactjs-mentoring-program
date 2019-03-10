import React, { memo } from 'react'

function movieTileItem(prop) {
    return <div><h4>{ prop.Title }</h4><p>{prop.Author}</p><p>{prop.Duration}</p></div>
}

export default memo(movieTileItem);