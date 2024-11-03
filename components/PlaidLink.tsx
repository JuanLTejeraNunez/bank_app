import React , {useCallback, useEffect, useState} from 'react'
import { Button } from './ui/button'
import {PlaidLinkOptions, PlaidLinkOnSuccess, usePlaidLink} from 'react-plaid-link'
import { create } from 'domain';
import { useRouter } from 'next/navigation';
import { createLinkToken } from '@/lib/actions/user.actions';

const PlaidLink = ({user, variant}: PlaidLinkProps) => {
    const router = useRouter();
const [token, settoken] = useState('');

 useEffect(()=>{
    const getLinkToken = async ()=>{
        const data = await createLinkToken(user);
       setToken(data?, LinkToken);
    }
    getLinkToken();
 },[user]);

    const onSuccess = useCallback<PlaidLinkOnSuccess>( async (
        public_token : string
    )=>{
         await exchangePublicToken=({
            publicToken : public_token,
             user,
         })
        router.push('/');
    },[user])
    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }

    const {open, ready} = usePlaidLink(config);

  return (
    <>
    {variant === 'primary' 
    ? (<Button 
        onClick={() => open ()}
        disabled={!ready}
       className="plaidlink-primary">
        Connect Bank
    </Button>)
    : variant === 'ghost' 
    ? (
        <Button>
            Connect Bank
        </Button>
    ): (
        <Button>
            Connect Bank
        </Button>
    )
}
    </>
  )
}

export default PlaidLink