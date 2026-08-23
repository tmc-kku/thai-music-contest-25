'use client'

import { useMemo, useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faSearch, faFilter, faTimesCircle, 
  faSchool, faMusic, faDoorOpen 
} from "@fortawesome/free-solid-svg-icons"

export type Contestant = {
  name: string
  school: string
  level: 'ประถมศึกษา' | 'มัธยมศึกษา'
  category: string
  piece?: string
  room?: string
}

interface SearchProps {
  data: Contestant[]
}

export default function Search({ data }: SearchProps) {
  // States
  const [q, setQ] = useState('')
  const [level, setLevel] = useState<string>('ทั้งหมด')
  const [category, setCategory] = useState<string>('ทั้งหมด')
  const [isFiltering, setIsFiltering] = useState(false)

  // Derived data with memoization
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(data.map(d => d.category)))
    return uniqueCategories.sort((a, b) => a.localeCompare(b, 'th'))
  }, [data])

  const levels = ['ทั้งหมด', 'ประถมศึกษา', 'มัธยมศึกษา']

  // Filtering logic
  const filtered = useMemo(() => {
    return data
      .filter(d => {
        const searchText = [
          d.name,
          d.school,
          d.category,
          d.piece,
          d.room
        ].filter(Boolean).join(' ').toLowerCase()

        const searchTerms = q.toLowerCase().split(' ').filter(term => term.length > 0)
        const matchQ = searchTerms.every(term => searchText.includes(term))
        
        const matchLevel = level === 'ทั้งหมด' || d.level === level
        const matchCat = category === 'ทั้งหมด' || d.category === category

        return matchQ && matchLevel && matchCat
      })
      .sort((a, b) => a.name.localeCompare(b.name, 'th'))
  }, [q, level, category, data])

  // Reset filters
  const resetFilters = () => {
    setQ('')
    setLevel('ทั้งหมด')
    setCategory('ทั้งหมด')
  }

  // Update filtering state
  useEffect(() => {
    setIsFiltering(q !== '' || level !== 'ทั้งหมด' || category !== 'ทั้งหมด')
  }, [q, level, category])

  return (
    <div className="space-y-8 font-kku">
      {/* Search Controls */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <FontAwesomeIcon 
            icon={faSearch} 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-ci-gold"
          />
          <input
            className="w-full px-12 py-4 rounded-xl bg-black/30 text-white 
                     focus:outline-none focus:ring-2 focus:ring-ci-gold 
                     placeholder-white/50 transition-all"
            placeholder="ค้นหาชื่อ โรงเรียน หรือรายการ..."
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          {q && (
            <button 
              onClick={() => setQ('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 
                       text-white/50 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <select
            value={level}
            onChange={e => setLevel(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-black/30 text-white
                     focus:outline-none focus:ring-2 focus:ring-ci-gold
                     transition-all cursor-pointer"
          >
            <option value="ทั้งหมด">ทุกระดับชั้น</option>
            {levels.map(l => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>

          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-black/30 text-white
                     focus:outline-none focus:ring-2 focus:ring-ci-gold
                     transition-all cursor-pointer"
          >
            <option value="ทั้งหมด">ทุกประเภทการประกวด</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          {isFiltering && (
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-ci-gold/20 hover:bg-ci-gold/30 
                       rounded-lg text-white transition-colors flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faTimesCircle} />
              ล้างตัวกรอง
            </button>
          )}
        </div>
      </div>

      {/* Results Stats */}
      <div className="flex justify-between items-center text-sm text-white/70 border-b border-white/10 pb-4">
        <div>
          พบ <span className="text-ci-gold font-bold">{filtered.length}</span> รายการ 
          {isFiltering && ` (จากทั้งหมด ${data.length} รายการ)`}
        </div>
        {isFiltering && (
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFilter} className="text-ci-gold" />
            กำลังกรอง
          </div>
        )}
      </div>

      {/* Results Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.length > 0 ? (
          filtered.map((d, idx) => (
            <div 
              key={idx} 
              className="card p-6 hover:bg-white/5 transition-all duration-300
                       backdrop-blur-sm bg-black/20 rounded-xl border border-white/5
                       hover:border-ci-gold/30"
            >
              <h3 className="text-xl font-bold text-ci-gold">{d.name}</h3>
              <div className="mt-3 space-y-2">
                <p className="flex items-center gap-2 text-white/80">
                  <FontAwesomeIcon icon={faSchool} className="text-ci-gold/70 w-4" />
                  {d.school}
                </p>
                <p className="flex items-center gap-2 text-white/80">
                  <FontAwesomeIcon icon={faMusic} className="text-ci-gold/70 w-4" />
                  {d.category}
                </p>
                {d.room && (
                  <p className="flex items-center gap-2 text-white/80">
                    <FontAwesomeIcon icon={faDoorOpen} className="text-ci-gold/70 w-4" />
                    ห้อง {d.room}
                  </p>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-ci-gold/20 text-white/90 text-sm">
                  {d.level}
                </span>
                {d.piece && (
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">
                    {d.piece}
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12 text-white/60">
            <FontAwesomeIcon icon={faSearch} className="text-4xl mb-4" />
            <p>ไม่พบรายการที่ค้นหา</p>
          </div>
        )}
      </div>
    </div>
  )
}