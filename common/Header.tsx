import { useWallet } from '@solana/wallet-adapter-react'
import {
  useWalletModal,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui'
import { AddressImage, DisplayAddress } from '@cardinal/namespaces-components'

import { useRouter } from 'next/router'
import { useEnvironmentCtx } from 'providers/EnvironmentProvider'
import { shortPubKey } from './utils'
import { HiUserCircle } from 'react-icons/hi'

export const Header = () => {
  const router = useRouter()
  const ctx = useEnvironmentCtx()
  const wallet = useWallet()
  const { setVisible } = useWalletModal()

  return (
    <div className={`flex flex-row h-20 justify-between pl-5 text-white`}>
      <div className="flex items-center gap-3">
        <div
          className="text-gray-700 font-bold uppercase tracking-wide hover:cursor-pointer"
          onClick={() =>
            router.push(
              `/${
                ctx.environment.label !== 'mainnet'
                  ? `?cluster=${ctx.environment.label}`
                  : ''
              }`
            )
          }
        >
          Hydra UI
        </div>
        {ctx.environment.label !== 'mainnet' && (
          <div className="cursor-pointer rounded-md bg-[#9945ff] p-1 text-[10px] italic text-white">
            {ctx.environment.label}
          </div>
        )}
      </div>

      <div className="relative my-auto flex items-center pr-8 align-middle">
        <div className="relative my-auto flex items-center align-middle text-gray-700 font-bold uppercase tracking-wide">
          <div
            onClick={() =>
              router.push(
                `/create${
                  ctx.environment.label !== 'mainnet'
                    ? `?cluster=${ctx.environment.label}`
                    : ''
                }`
              )
            }
          >
            <p className="my-auto mr-10 hover:cursor-pointer">Create</p>
          </div>
        </div>
        {wallet.connected ? (
          <div
            className="flex cursor-pointer gap-2"
            onClick={() => setVisible(true)}
          >
            <AddressImage
              connection={ctx.connection}
              address={wallet.publicKey || undefined}
              height="40px"
              width="40px"
              dark={true}
              placeholder={
                <div
                  style={{
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    marginRight: '5px',
                  }}
                >
                  <div style={{ height: '40px', width: '40px' }}>
                    <HiUserCircle style={{ height: '100%', width: '100%' }} />
                  </div>
                </div>
              }
            />
            <div>
              <div className="text-white ">
                <DisplayAddress
                  style={{ pointerEvents: 'none' }}
                  connection={ctx.connection}
                  address={wallet.publicKey || undefined}
                  height="12px"
                  width="100px"
                  dark={true}
                />
              </div>
              <div style={{ color: 'gray' }}>
                {wallet?.publicKey ? shortPubKey(wallet?.publicKey) : ''}
              </div>
            </div>
          </div>
        ) : (
          <WalletMultiButton
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '14px',
              zIndex: 10,
              height: '38px',
              border: 'none',
              background: 'none',
              backgroundColor: 'none',
            }}
          />
        )}
      </div>
    </div>
  )
}
