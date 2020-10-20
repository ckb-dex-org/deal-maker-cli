// @ts-nocheck
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IsUrl, validate } from 'class-validator'

@Entity()
export class Config {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar', { name: 'remote_url', default: 'http://localhost:8114' })
  @IsUrl({ require_tld: false, require_host: false }, { message: 'remote url must be an URL address' })
  remoteUrl: string

  @Column('varchar', { name: 'token_pairs', default: '' })
  tokenPairs: string

  @Column('varchar', { name: 'fee_rate', default: '1000' })
  feeRate: string

  @Column('varchar', { name: 'key_file', eager: false, nullable: true })
  keyFile: string | null

  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    const errors = await validate(this)
    if (errors.length > 0) {
      throw new Error(JSON.stringify(errors[0].constraints))
    }
  }
}
