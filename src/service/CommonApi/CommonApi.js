/*
 * @Author: lixiao
 * @Date: 2020-05-14 21:43
 * @Description: 技术革新奖相关接口
 */
import { fetchPost, fetchGet, fetchPut, fetchDel } from '@/axios';

const CommonApi = {
    /**
     * @author: lixiao
     * @description: 删除切换等级删除的超出的主要完成人数量
     * @param {type}
     */
    deleteBeyondPerson (Id, Number) {
        return fetchGet('/api/v1/award/achievePeopleDetail/deletePeopleById', {awardDeclarationId: Id, number: Number});
    },
};

export default CommonApi;
