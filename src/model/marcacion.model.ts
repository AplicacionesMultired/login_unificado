import { DataTypes, Model, Optional } from 'sequelize';
import { marcacion } from '../connections/marcacion';
import { Persona } from './persona.model';

export interface MarcacionAttributes {
  id?: number;
  id_empleado?: number;
  fecha_marcacion?: Date;
  estado_marcacion?: string;
  nombre_dispositivo?: string;
  observacion?: string;
  observacionPersonal?: string;
  id_turno?: number;
  Pais?: string;
  Ciudad?: string;
  Direccion?: string;
  Latitud?: string;
  Longitud?: string;
  id_foto_temota?: string;
}

export interface MarcacionCreationAttributes extends Optional<MarcacionAttributes, 'id'> { }

export class Marcacion extends Model<MarcacionAttributes, MarcacionCreationAttributes> implements MarcacionAttributes {
  public id!: number;
  public id_empleado!: number;
  public fecha_marcacion!: Date;
  public estado_marcacion!: string;
  public nombre_dispositivo!: string;
  public observacion!: string;
  public observacionPersonal!: string;
  public id_turno!: number;
  public Pais!: string;
  public Ciudad!: string;
  public Direccion!: string;
  public Latitud!: string;
  public Longitud!: string;
  public id_foto_temota!: string;
  public Persona!: Persona;
}

Marcacion.init(
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    id_empleado: { type: DataTypes.INTEGER, allowNull: true, },
    fecha_marcacion: { type: DataTypes.DATE, allowNull: true, },
    estado_marcacion: { type: DataTypes.STRING, allowNull: true, },
    nombre_dispositivo: { type: DataTypes.STRING, allowNull: true, },
    observacion: { type: DataTypes.STRING, allowNull: true, },
    observacionPersonal: { type: DataTypes.STRING, allowNull: true, },
    id_turno: { type: DataTypes.INTEGER, allowNull: true, },
    Pais: { type: DataTypes.STRING, allowNull: true, },
    Ciudad: { type: DataTypes.STRING, allowNull: true, },
    Direccion: { type: DataTypes.TEXT, allowNull: true, },
    Latitud: { type: DataTypes.TEXT, allowNull: true, },
    Longitud: { type: DataTypes.TEXT, allowNull: true, },
    id_foto_temota: { type: DataTypes.STRING, allowNull: true, },
  },
  {
    tableName: 'marcacion',
    sequelize: marcacion,
    timestamps: false,
  }
);

Marcacion.belongsTo(Persona, { foreignKey: 'id_empleado', targetKey: 'id' });