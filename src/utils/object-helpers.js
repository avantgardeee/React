
export const updateObjectInArray=(items,itemId,objPropName,newObjProps)=> {
    return items.map(u => {
        if (u[objPropName] === itemId) {//u[objPropName]==u.objPropName
            return {...u, ...newObjProps}
        }
        return u;
    })
}