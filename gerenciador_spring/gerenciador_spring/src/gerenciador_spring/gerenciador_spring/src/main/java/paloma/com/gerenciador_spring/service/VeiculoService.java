 package paloma.com.gerenciador_spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import paloma.com.gerenciador_spring.entities.VeiculoEntity;
import paloma.com.gerenciador_spring.repository.VeiculoRepository;
@Service
public class VeiculoService {
    @Autowired
    private VeiculoRepository veiculoRepository;

   
    public List<VeiculoEntity> listarVeiculos() {
        return veiculoRepository.findAll();
    }

    public Optional<VeiculoEntity> buscarVeiculoPorId(Integer id) {
        return veiculoRepository.findById(id);
    }

    public VeiculoEntity salvarVeiculo(VeiculoEntity veiculoEntity) {
        return veiculoRepository.save(veiculoEntity);
    }

    public void excluirVeiculo(Integer id) {
        veiculoRepository.deleteById(id);
    }

    
}