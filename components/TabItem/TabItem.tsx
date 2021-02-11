import React, { FC, ReactElement, useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
import styles from './TabItem.module.css'

interface tabObjectProp {
  id: string
  label: string
  link: string
  icon: ReactElement
}
interface tabItemProp {
  title: string
  icon: ReactElement
  isActive: boolean
  onItemClicked: () => void
  links: tabObjectProp[]
  query: string
}

const TabsMenu: FC<tabItemProp> = ({ title, icon, onItemClicked, isActive, links, query }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const iconMenuEl = useRef(null)
  const menuEl = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      const isOutsideMenuEl = menuEl.current && !menuEl.current.contains(event.target)
      const isOutsideMenuIcon = iconMenuEl.current && !iconMenuEl.current.contains(event.target)
      if (isOutsideMenuIcon && isOutsideMenuEl) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [iconMenuEl])

  return (
    <div
      className={classnames(styles.tab, { [styles.active]: isActive })}
      onClick={() => {
        if (links) {
          setIsDropdownOpen((prev) => !prev)
        } else {
          onItemClicked()
        }
      }}
      ref={iconMenuEl}
    >
      <p className={styles.title}>
        {icon && <span className={styles.icon}>{icon}</span>} {title}
      </p>
      {isDropdownOpen && (
        <ul className={styles.dropdown} ref={menuEl}>
          {links &&
            links.map((item: { id: string; label: string; link: string; icon: ReactElement }) => (
              <li key={item.label}>
                <a href={`${item.link}${query}`} target='_blank'>
                  <span className={classnames(styles.linkIcon, styles[item.id])}>{item.icon}</span>
                  {item.label}
                </a>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

TabsMenu.defaultProps = {
  isActive: false,
}

export default TabsMenu
