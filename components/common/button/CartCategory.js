import styles from './CartCategory.module.sass'
import variables from '@/styles/_variables.module.sass'
import Link from 'next/link'

//hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function CartCategory({ setIdFromChild, idFromChild }) {
  const category = [
    {
      text: '購物車',
      id: 1,
    },
    {
      text: '下次再買',
      id: 2,
    },
  ]

  const router = useRouter()
  if (idFromChild != router.query.tab) return
  const [id, setId] = useState(idFromChild)

  useEffect(() => {
    setIdFromChild(id)
  }, [id])

  return (
    <>
      <div className={`${styles.flex_row}`}>
        {category.map((v, i) => {
          return (
            <Link key={i} className="link" href={`?tab=${v.id}`}>
              <div className={`${styles.position} me15px`}>
                <button
                  className={`${styles.button} fwBold fs20px`}
                  style={{
                    background:
                      v.id === idFromChild
                        ? variables['brown']
                        : variables['bgColor'],
                    color:
                      v.id === idFromChild ? 'white' : variables['fontColor'],
                    opacity: v.id === idFromChild ? 1 : 0.5,
                    letterSpacing: '3px',
                  }}
                  onClick={() => {
                    setId(v.id)
                  }}
                >
                  {v.text}
                </button>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
