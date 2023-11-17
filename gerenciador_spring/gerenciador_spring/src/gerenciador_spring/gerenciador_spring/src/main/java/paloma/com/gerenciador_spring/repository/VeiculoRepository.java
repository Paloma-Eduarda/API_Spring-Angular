package paloma.com.gerenciador_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import paloma.com.gerenciador_spring.entities.VeiculoEntity;

public interface VeiculoRepository  extends JpaRepository<VeiculoEntity, Integer>{
    
    
}
